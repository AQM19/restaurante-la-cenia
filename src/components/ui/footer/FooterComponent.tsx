import Link from 'next/link'
import React from 'react'
import { LiaFacebookF, LiaInstagram, LiaTripadvisor } from 'react-icons/lia'
import { Link as I18nLink } from '@/i18n/routing';

const FooterComponent = () => {
    return (
        <footer className="text-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Restaurant Name and Description */}
                    <div>
                        <h2 className="text-2xl font-bold">Gourmet Delight</h2>
                        <p className="mt-2 text-neutral-50">Exquisite dining experience in the heart of the city.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <I18nLink href="/" className="hover:text-gray-300 transition-colors">Home</I18nLink>
                            </li>

                            <li>
                                <I18nLink href="/" className="hover:text-gray-300 transition-colors">Menu</I18nLink>
                            </li>

                            <li>
                                <I18nLink href="/" className="hover:text-gray-300 transition-colors">Reservations</I18nLink>
                            </li>

                            <li>
                                <I18nLink href="/" className="hover:text-gray-300 transition-colors">Contact</I18nLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>123 Gourmet Street</p>
                        <p>Foodie City, FC 12345</p>
                        <p className="mt-2">Phone: (555) 123-4567</p>
                        <p>Email: info@gourmetdelight.com</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href={'https://www.facebook.com/la.cena.restaurante/?locale=es_LA'} target='_blank'>
                                <LiaFacebookF size={28} />
                            </Link>

                            <Link href={'https://www.instagram.com/restaurantelacena/'} target='_blank' >
                                <LiaInstagram size={28} />
                            </Link>

                            <Link href={'https://www.tripadvisor.es/Hotel_Review-g2467304-d2678821-Reviews-Apartamentos_La_Cena-Novales_Cantabria.html'} target='_blank' >
                                <LiaTripadvisor size={28} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} Gourmet Delight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent