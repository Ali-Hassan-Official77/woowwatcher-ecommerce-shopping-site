export default function Loading() {
  return <main className="loading-page">
    <div className="loading-brand"><span className="skeleton skeleton-logo"/><span className="skeleton skeleton-word"/></div>
    <div className="skeleton skeleton-hero"/>
    <div className="loading-grid">{Array.from({length:8}).map((_,i)=><div className="skeleton-card" key={i}><span className="skeleton skeleton-image"/><span className="skeleton skeleton-line wide"/><span className="skeleton skeleton-line"/></div>)}</div>
  </main>;
}
