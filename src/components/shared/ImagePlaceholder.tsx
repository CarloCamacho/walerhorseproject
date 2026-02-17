interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  label = "Image Coming Soon",
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-parchment ${aspectRatio} ${className}`}
    >
      <div className="text-center">
        <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-ochre/20 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-ochre"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
            />
          </svg>
        </div>
        <p className="text-sm text-deep-brown/50 font-body">{label}</p>
      </div>
    </div>
  );
}
