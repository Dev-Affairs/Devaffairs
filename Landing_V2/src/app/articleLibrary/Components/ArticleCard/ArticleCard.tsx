// components/ArticleCard.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ArticleCardProps {
    slug: string;
    image: string;
    tags: string[];
    title: Array<{ text: string; highlight?: boolean }>;
    description: string;
}

export const ArticleCard = ({ slug, image, tags, title, description }: ArticleCardProps) => {

    const router = useRouter();

    const handleArticleClick = (slug: string) => {
        console.log(`Navigating to article with slug: ${slug}`);
        router.push(`/article/${slug}`)
    }
    
    let titleText = title.map(obj => obj.text).join(' ');

    return (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 dark:border-neutral-800 transition duration-300 h-full group" onClick={() => handleArticleClick(slug)}>
            <div className="relative w-full h-52 md:h-60">
                <Image src={image} alt={titleText} fill className="object-cover transition duration-300 transform" />
            </div>
            <div className="p-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-sm border border-blue-500 text-blue-500 px-3 py-1 rounded-xl"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {
                        title.map((part, index) => (
                            <span
                                key={index}
                                className={part.highlight ? 'text-red-600' : 'text-gray-900 dark:text-white'}
                            >
                                {part.text}
                                {index < title.length - 1 && ' '}
                            </span>
                        ))
                    }
                </h3>
                <p className="text-basic">{description}</p>
            </div>
        </div>
    );
};
