import "../styles/sprite_animator.css";

function FallbackElement() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="primary-font text-5xl">Loading data ... please wait</h1>
                {/* <span className="loading loading-spinner loading-xl"></span> */}
                <div className="scale-25 origin-top-left relative w-[349px] h-[344px]">
                    <div className="sprite"></div>
                </div>
        </div>
    );
};

export default FallbackElement;