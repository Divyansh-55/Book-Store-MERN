import React from 'react'

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 p-6 dark:bg-slate-800 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to <strong>Book Haven</strong>, your ultimate destination for books, courses, and more! Whether you're an avid reader, a student preparing for competitive exams, or someone looking to expand your knowledge through courses, we have something for everyone.
        </p>
        
        <h2 className="text-3xl font-semibold mb-3">Who We Are</h2>
        <p className="text-lg mb-4">
          At <strong>Book Haven</strong>, we believe in the power of reading and learning. Our mission is to provide access to a diverse range of books and educational resources to inspire and empower our customers. We cater to readers of all ages and interests, ensuring that there's a perfect book for everyone in our collection.
        </p>

        <h2 className="text-3xl font-semibold mb-3">What We Offer</h2>
        
        <h3 className="text-2xl font-semibold mb-2">A Wide Range of Books</h3>
        <p className="text-lg mb-4">
          Explore our extensive collection of books across various categories:
          <ul className="list-disc list-inside ml-4">
            <li><strong>Comics:</strong> Dive into the world of superheroes, graphic novels, and manga.</li>
            <li><strong>Novels:</strong> From timeless classics to contemporary bestsellers, find novels that captivate and entertain.</li>
            <li><strong>Competitive Exams:</strong> Prepare with confidence using our comprehensive range of study materials and guides.</li>
            <li><strong>Science Fiction, Fantasy, Mystery, Romance, Historical Fiction, and more:</strong> Discover books that match your interests and spark your imagination.</li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold mb-2">Courses</h3>
        <p className="text-lg mb-4">
          In addition to books, we offer a variety of online courses designed to help you learn new skills and deepen your knowledge:
            <ul className="list-disc list-inside ml-4">
            <li>Language Learning</li>
            <li>Professional Development</li>
            <li>Academic Subjects</li>
            <li>Creative Arts</li>
            <li>Technology and Programming</li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold mb-2">Subscription Services</h3>
        <p className="text-lg mb-4">
          Join our subscription plans to enjoy exclusive benefits:
          <ul className="list-disc list-inside ml-4">
            <li><strong>Monthly Book Club:</strong> Receive a curated selection of books delivered to your door each month.</li>
            <li><strong>E-Book Subscription:</strong> Get unlimited access to our extensive e-book library.</li>
            <li><strong>Course Bundles:</strong> Access multiple courses at a discounted rate.</li>
          </ul>
        </p>

        <h2 className="text-3xl font-semibold mb-3">Our Commitment</h2>
        <p className="text-lg mb-4">
          <strong>Quality:</strong> We carefully select books and courses to ensure that you receive high-quality content.<br />
          <strong>Diversity:</strong> Our catalog includes a wide variety of genres and subjects to cater to diverse tastes and needs.<br />
          <strong>Customer Service:</strong> We are dedicated to providing excellent customer service. Our team is here to help you with any questions or concerns.
        </p>

        <h2 className="text-3xl font-semibold mb-3">Join Our Community</h2>
        <p className="text-lg mb-4">
          At <strong>Book Haven</strong>, we are more than just a bookstore. We are a community of readers and learners. Connect with us through our blog, participate in our online forums, and join our events to meet fellow book enthusiasts and learners.
        </p>

        <p className="text-lg mb-4">
          Thank you for choosing <strong>Book Haven</strong>. We look forward to being a part of your reading and learning journey!
        </p>
      </div>
    </>
  )
}

export default About
