import ChatArea from "@/components/chat-area";
import OptionButtons from "@/components/dashboard/option-buttons";
import FriendsList from "@/components/friends-list";
import PageWrapper from "@/components/page-wrapper";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <PageWrapper>
      <div className="grid auto-rows-min gap-5 md:grid-cols-3 md:gap-8">
        <div className="md:col-span-1">
          <SearchForm />
        </div>
        <OptionButtons />
      </div>
      <div className="grid auto-rows-min text-white gap-4 md:grid-cols-3 md:h-[calc(100vh-250px)] md:gap-8 md:auto-rows-auto">
        <FriendsList />
        <ChatArea />
      </div>
      {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
    </PageWrapper>
  );
}
