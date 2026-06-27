export default function EventCard({ title, date, description, image_url }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#e3e3e0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#3E3E3A] dark:bg-[#161615]">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#fff2f2] dark:bg-[#1D0002]">
                <img
                    src={image_url}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
                <time className="inline-flex w-fit items-center rounded-full bg-[#fff2f2] px-3 py-1 text-xs font-medium text-[#f53003] dark:bg-[#1D0002] dark:text-[#FF4433]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1.5 h-3.5 w-3.5"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {date}
                </time>

                <h2 className="text-lg font-semibold leading-snug text-[#1b1b18] dark:text-[#EDEDEC]">
                    {title}
                </h2>

                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-[#706f6c] dark:text-[#A1A09A]">
                    {description}
                </p>
            </div>
        </article>
    );
}
