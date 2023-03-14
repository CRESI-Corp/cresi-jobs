import ContactForm from '../components/contactForm'

function contactPage() {
    return (
        <div className="bg-Dominant text-Text w-screen h-screen">
            <h1 className="text-3xl md:text-5xl font-bold text-Primary p-2 mx-6 mt-12 md:mt-28 mb-8 ">Nous contacter</h1>
            <ContactForm />
        </div>
    );

}

export default contactPage