'use client'

import Image from 'next/image'

export default function DesignerCard({ designer }) {

    const fullImageUrl = `/${designer.photo_url}`;
    
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-md mx-auto mb-6">
            {fullImageUrl && (
                <Image
                    src={fullImageUrl}
                    width={32}
                    height={32}
                    alt={`${designer?.name}'s avatar`}
                    className="rounded-full mx-auto object-cover"
                />
                )}
            <h2 className="text-xl font-semibold text-center mt-4">{designer.name}</h2>
            <p className="text-center text-gray-500">{designer.location} · {designer.language}</p>
            <p className="mt-4 text-sm text-gray-700">{designer.bio}</p>
        </div>
    );
}