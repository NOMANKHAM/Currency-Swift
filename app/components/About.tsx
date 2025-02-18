export default function About() {
  return (
    <section className="about" id="about">
      <h1>About Us</h1>

      <div className="abcard cardabout1">
        <h2>What Our App Does:</h2>
        <p className="abcardp">
          Currency-Swift is a cutting-edge currency conversion tool designed to provide quick and accurate exchange
          rates for users worldwide. Our platform leverages the latest financial data to ensure you have access to the
          most up-to-date currency information.
        </p>
        <p className="abcardp">
          Whether you`re a traveler planning your next adventure, a business professional dealing with international
          transactions, or simply curious about global currency trends, Currency-Swift has you covered. At Currency-Swift, 
          we`re committed to providing a seamless and reliable currency conversion experience. Our team of financial experts 
          and developers work tirelessly to ensure the accuracy and efficiency of our service.
        </p>
      </div>

      <div className="abcard cardabout2">
        <h2>Our Features Include:</h2>
        <ul>
          <li>Real-time currency conversion</li>
          <li>Support for over 150 global currencies</li>
          <li>User-friendly interface for easy navigation</li>
          <li>Mobile-responsive design for on-the-go access</li>
          <li>Historical exchange rate data (coming soon)</li>
        </ul>
      </div>
    </section>
  );
}
