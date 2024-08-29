interface TagsBoxProps {
    tags?: string | string[];
}

const TagsBox: React.FC<TagsBoxProps> = ({ tags = [] }) => {
    const tagList = Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim());

    return (
        <div className="flex flex-wrap gap-2">
            {tagList.map((tag, index) => (
                <div key={index} className="bg-stone-200 px-4 py-1 rounded-full">
                    <span className="text-sm text-stone-600">#{tag}</span>
                </div>
            ))}
        </div>
    );
};

export default TagsBox;
