import React from "react";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";
// @ts-ignore
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

interface HomeProps {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export function Home({ recentPosts }: HomeProps): JSX.Element {
  return (
    <Layout>
      <div className="hero hero--dark hero--home shadow--lw">
        <div className="container">
          <div className="row">
            <div className="col col--9 col--offset-1">
              <h1 className="hero__title">Bithubby's Story</h1>
              <p className="hero__subtitle">
                A bit story from the future hubby
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container margin-top--xl margin-bottom--lg">
        <div className="row">
          <div className="col col--9 col--offset-1">
            {recentPosts.map(({ content: BlogPostContent }) => (
              <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              >
                <BlogPostItem>
                  <BlogPostContent />
                </BlogPostItem>
              </BlogPostProvider>
            ))}
          </div>
        </div>
        {/* <div className="row">
          <div className="col col--5 col--offset-5">
            <PaginatorNavLink
              isNext
              permalink="/blog/page/2"
              title="Older Post"
            />
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default Home;
