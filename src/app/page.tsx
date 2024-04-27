export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="signup-wrapper">
        <div className="text-wrapper">
          <h1>Sign up to our newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit praesent
            sodales purus magna, eget lacinia sapien hendrerit.
          </p>
        </div>
        <form action="/">
          <label className="hidden" htmlFor="email" />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
          <button type="submit">sign up</button>
        </form>
      </div>
    </div>
  );
}
