import ReactMarkdown from "react-markdown";

export default function Home() {
  return (
    <main className="flex flex-col p-4">
      <div className="flex flex-nowrap">
        <div className="items-center p-80">
          <input
            type="file"
            className="file-input file-input-bordered max-w-xs left-0"
          />
        </div>
        <div className="p-6 border-gray-50 border-4 rounded-lg w-full">
          <div className="chat chat-start">
            <div className="chat-bubble">
              It's over Anakin, <br />I have the high ground.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">
              <ReactMarkdown>this is a test sentence</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
