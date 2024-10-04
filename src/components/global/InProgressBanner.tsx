import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export function InProgressBanner() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 size-4" />
            <span className="[&_p]:inline">
              This website is still under construction - Please excuse the mess!
            </span>
          </p>
        </div>
        <BannerCollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="size-4" />
        </BannerCollapseButton>
      </div>
    </Banner>
  );
}
