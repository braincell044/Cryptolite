import { useEffect } from "react";

const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jivosite.com/widget/6GI5lMt7X4";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null; // The script loads the widget, so no need to return JSX
};

export default JivoChat;
