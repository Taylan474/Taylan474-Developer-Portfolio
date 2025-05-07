function Thesis() {
  return (
      <main className="bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center">Bachelor’s Thesis Overview</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Product Identification is Important at Alukon</h2>
          <p className="text-gray-300">
            Alukon KG manufactures a wide range of components for roller shutters, insect screens, and sun protection systems in various sizes and materials.
            Accurate identification and coating of individual parts is crucial for maintaining consistent quality, especially since many parts are visually similar in shape and surface.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What is YOLO?</h2>
          <p className="text-gray-300">
            YOLO (You Only Look Once) is a real-time object detection algorithm that analyzes images and identifies objects
            with high speed and accuracy. It is well-suited for industrial applications where fast decision-making is essential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Example Images from the Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/yolo-detection-1.png" alt="YOLO Example 1" className="rounded shadow" />
            <img src="/images/yolo-detection-2.png" alt="YOLO Example 2" className="rounded shadow" />
          </div>
        </section>

        <div className="text-center pt-10">
          <a
            href="/thesis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-300 transition"
          >
            View Full Thesis (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}

export default Thesis;
