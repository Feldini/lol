export default function Category({ params }) {
    const { slug } = params;
  
    return (
      <div>
        <h2>{slug.toUpperCase()} News</h2>
        <p>All the latest {slug} news.</p>
      </div>
    );
  }
  