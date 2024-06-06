import Head from 'next/head';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const images = [
    'https://as1.ftcdn.net/v2/jpg/05/14/95/12/1000_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
    'https://as1.ftcdn.net/v2/jpg/05/14/95/12/1000_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
    'https://as2.ftcdn.net/v2/jpg/03/23/82/99/1000_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg',
    'https://as2.ftcdn.net/v2/jpg/02/00/14/63/1000_F_200146338_NTWg7HF65p5z6IUIXzxJbkJ5zlEt3gnG.jpg'
];
const AboutPage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>About Us</title>
                <meta name="description" content="Learn about our company and mission." />
            </Head>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Us</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                        <Slider {...sliderSettings}>
                            {images.map((image, index) => (
                                <div key={index} className="w-full h-64">
                                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </Slider>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black w-full h-full pointer-events-none"
                        ></motion.div>
                            <motion.div
                                initial={{ y: '-100%' }}
                                animate={{ y: '0' }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-white text-center"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold mb-2">Discover Our Story</h2>
                                <p className="text-lg md:text-xl">Learn about our journey, mission, and values.</p>
                            </motion.div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-700 mb-4">
                            Recent advancements in technology have ushered in a wave of new features across diverse domains. Artificial Intelligence (AI) has seen significant strides with improved Natural Language Processing (NLP) models like GPT-3 and GPT-4, enabling more nuanced and context-aware interactions. Internet of Things (IoT) devices are integrating with 5G networks for faster connectivity and leveraging edge computing for real-time processing. Blockchain technology has introduced Non-Fungible Tokens (NFTs) for digital asset tokenization and expanded into decentralized finance (DeFi) services.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Cybersecurity is adopting Zero Trust Architecture and AI-driven solutions for enhanced threat detection and response. Cloud computing is evolving with multi-cloud and serverless computing models for flexibility and scalability.
                        </p>
                        <p className="text-lg text-gray-700">
                            These advancements collectively showcase the dynamic nature of technology, driving innovation and reshaping various industries.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutPage;