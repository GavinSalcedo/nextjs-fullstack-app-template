import Image from 'next/image';
import Newsletter from '../Newsletter';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <section className="flex gap-28 bg-black text-white p-8">
      <>
        <Image
          alt="footer-logo"
          src="https://img.represent.com/uploads/users/1353172/e79b5bdd46b790b7ce393429c8a92366.png?"
          width={175}
          height={150}
          className="h-16 mr-40"
        />
        <FooterLink />
        <Newsletter />
      </>
    </section>
  );
}

export default Footer;
