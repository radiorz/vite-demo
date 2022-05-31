// 不使用 因为是 ssr 相关
import Prism from "markdown-it-prism";
import LinkAttributes from "markdown-it-link-attributes";
// prose prose-sm
const markdownWrapperClasses = " m-auto text-left";
export default {
  wrapperClasses: markdownWrapperClasses,
  headEnabled: true,
  markdownItSetup(md) {
    // https://prismjs.com/
    md.use(Prism);
    md.use(LinkAttributes, {
      matcher: (link) => /^https?:\/\//.test(link),
      attrs: {
        target: "_blank",
        rel: "noopener",
      },
    });
  },
};
