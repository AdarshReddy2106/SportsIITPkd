import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const Contact = () => (
  <section>
    <Container>
      <div className="text-center mb-8">
        <Title>Get In Touch</Title>
        <p className="text-heading-3 mt-2">
          Have questions? We're here to help you get started on your sports journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-box-bg rounded-3xl p-6 border border-box-border">
          <div className="font-semibold mb-2">Contact Information</div>
          <div className="mb-2">Address: IIT Palakkad, Kerala, India - 678623</div>
          <div className="mb-2">Phone: +91 4923 232 300</div>
          <div className="mb-2">Email: sports@iitpkd.ac.in</div>
        </div>
        <form className="bg-box-bg rounded-3xl p-6 border border-box-border flex flex-col gap-4">
          <input className="p-3 rounded-lg border border-box-border" placeholder="Name" />
          <input className="p-3 rounded-lg border border-box-border" placeholder="Email" />
          <textarea className="p-3 rounded-lg border border-box-border" placeholder="Message" />
          <button className="py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </Container>
  </section>
);