'use client'

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Post from "@/app/interfaces/post";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

interface MoreStoriesModalProps {
    posts: Post[];
    onTagClick: (tag: string) => void;
    onShowAllClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 px-14 py-12 rounded-lg shadow-xl w-[90%] max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={onClose}
                    >
                        <IoMdClose />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

const MoreStoriesModal: React.FC<MoreStoriesModalProps> = ({ posts, onTagClick, onShowAllClick }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModal = () => setIsOpen(prev => !prev);

    const countTags = (posts: Post[]): { [key: string]: number } => {
        const tagCounts: { [key: string]: number } = {};
        posts.forEach((post) => {
            if (Array.isArray(post.tags)) {
                post.tags.forEach((tag: string) => {
                    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                });
            }
        });

        return tagCounts;
    };

    const formattedTags = Object.keys(countTags(posts)).map(tag => (
        <p key={tag} onClick={() => { onTagClick(tag); toggleModal() }} className='hover:text-stone-900/80'>
            {tag} ({countTags(posts)[tag]})
        </p>
    ));

    return (
        <div className="flex justify-center items-center">
            <button
                onClick={toggleModal}
                className="bg-stone-200/60 hover:bg-stone-200/80 px-4 py-2 rounded-md"
            >
                태그 열기
            </button>

            <Modal isOpen={isOpen} onClose={toggleModal}>
                <div className='text-2xl font-bold'>
                    <button
                        className='mb-4'
                        onClick={() => { onShowAllClick(); toggleModal(); }}
                    >
                        <p>전체보기</p>
                    </button>
                    <div
                        className='
                        flex
                        flex-col
                        gap-4
                    '>
                        {formattedTags}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MoreStoriesModal;
