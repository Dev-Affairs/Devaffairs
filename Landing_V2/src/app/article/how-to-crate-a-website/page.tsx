'use client';

import Image from 'next/image';

export default function page() {
    return (
        <section className="pt-10">
            {/* Top Image */}
            {/* <div className="main-margin h-[50vh] sm:h-[60vh] relative rounded-2xl overflow-hidden mb-8">
                <Image
                    src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0"
                    alt="Case Study"
                    fill
                    className="object-cover"
                    priority
                />
            </div> */}
            <div className='main-margin bg-[#ffffff] dark:bg-[#161616] px-6 sm:px-10 py-12  shadow-md rounded-3xl'>
                <div className='flex flex-col sm:flex-row items-start justify-between gap-6 mb-8'>
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold leading-snug head-2">
                            A COMMITMENT TO EXCELLENCE <br />
                            IN{' '}
                            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md">
                                DIGITAL MARKETING
                            </span>
                        </h2>

                        <p className="text-basic max-w-3xl">
                            We pride ourselves on delivering impactful results. Our campaigns have achieved a
                            30% increase in client engagement, highlighting our digital marketing expertise.
                            Join the successful agencies that trust us to enhance their brand presence.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="rounded-xl">
                            <p className="font-medium">Date</p>
                            <p className="text-basic">
                                November 16, 2024
                            </p>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
            </div>
            <div className='main-margin bg-[#ffffff] dark:bg-[#161616] px-6 sm:px-10 py-12  shadow-md rounded-3xl'>
                <div className="max-w-3xl m-auto">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight max-w-3xl">
                        Fortress Completes Harmon Offices for ADA Realty in Los Andes, CA
                    </h1>

                    {/* Image */}
                    <div className="relative w-full h-[250px] sm:h-[400px] rounded-xl overflow-hidden mb-8">
                        <Image
                            src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0"
                            alt="Fortress Project"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Article Body */}
                    <div >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, rutrum sed
                            tincidunt in, placerat non eros. Nam maximus nunc nec vestibulum rutrum. Donec feugiat
                            posuere eros, id sagittis augue congue id. Nam ac bibendum risus. Quisque risus enim,
                            convallis id commodo eleifend, rutrum non nisi.
                        </p>
                        <p>
                            raesent pretium in tellus vitae hendrerit. Praesent dictum, lectus commodo egestas
                            sodales, augue eros dignissim ipsum, sed iaculis risus felis sed lacus. Ut in mauris erat.
                        </p>

                        <h2 className='head-2'>Heading 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, rutrum sed
                            tincidunt in, placerat non eros. Nam maximus nunc nec vestibulum rutrum. Donec feugiat
                            posuere eros.
                        </p>
                        <p>
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Curabitur ac augue diam. Fusce euismod leo purus, fringilla rutrum erat lobortis in.
                        </p>

                        <h3 className='head-3'>Heading 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, rutrum sed
                            tincidunt in, placerat non eros.
                        </p>

                        <h4 className='head-4'>Heading 4</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, rutrum sed
                            tincidunt in, placerat non eros.
                        </p>

                        <h5 className='head-5'>Heading 5</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nibh, rutrum sed
                            tincidunt in, placerat non eros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
