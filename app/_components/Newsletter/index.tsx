import Input from '../Input';

function Newsletter() {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-bold mb-1">Newsletter</h2>
      <p>Sign up to receive news and updates</p>
      <Input block={true} placeholder="email@example.com" />
    </section>
  );
}

export default Newsletter;
