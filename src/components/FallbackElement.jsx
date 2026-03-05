/** FallbackElement.jsx
 * default fallback component for when data is loading. displays a loading message and an animation of gleebus spinning
 */

import "../styles/sprite_animator.css";

function FallbackElement() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="primary-font text-5xl">Please wait while we load...</h1>
                <div className="scale-25 origin-top-left relative w-[349px] h-[344px]"> {/* scaled via the original gleebus art */}
                    <div className="sprite"></div>
                </div>
        </div>
    );
};

export default FallbackElement;