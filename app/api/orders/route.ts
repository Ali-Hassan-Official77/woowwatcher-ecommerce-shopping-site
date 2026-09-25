import { NextResponse } from 'next/server';
import { z } from 'zod';
import { products } from '@/lib/data';

const schema=z.object({
 customer:z.object({
  name:z.string().trim().min(2).max(80),
  phone:z.string().trim().min(7).max(25).regex(/^[+()\d\s-]+$/),
  address:z.string().trim().min(8).max(240),
  note:z.string().trim().max(300).optional().default('')
 }),
 items:z.array(z.object({id:z.string().min(1),quantity:z.coerce.number().int().min(1).max(20)})).min(1).max(20),
 payment:z.literal('cod')
});
export async function POST(request:Request){
 try{
  const parsed=schema.safeParse(await request.json());
  if(!parsed.success)return NextResponse.json({ok:false,message:parsed.error.issues[0]?.message||'Please check your order details.'},{status:400});
  const {customer,items,payment}=parsed.data;
  if(new Set(items.map(x=>x.id)).size!==items.length)return NextResponse.json({ok:false,message:'Duplicate product in cart.'},{status:400});
  const lineItems=items.map(line=>{const p=products.find(x=>x.id===line.id);if(!p)throw new Error('A selected product is no longer available.');return {id:p.id,name:p.name,slug:p.slug,quantity:line.quantity,unitPrice:p.price,lineTotal:p.price*line.quantity,image:p.image}});
  const subtotal=lineItems.reduce((s,x)=>s+x.lineTotal,0);const delivery=subtotal>=5000?0:250;const total=subtotal+delivery;
  const order={id:`WW-${Date.now().toString(36).toUpperCase()}`,status:'confirmed',createdAt:new Date().toISOString(),eta:'Local coordination',customer,payment,currency:'PKR',pricing:{subtotal,delivery,discount:0,total},total,items:lineItems};
  return NextResponse.json({ok:true,order},{status:201});
 }catch(error){return NextResponse.json({ok:false,message:error instanceof Error?error.message:'Unable to place your order.'},{status:500})}
}
