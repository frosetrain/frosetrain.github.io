import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
    TITLE: "Frosetrain’s Place",
    DESCRIPTION: "A place for me to talk about things.",
    EMAIL: "80436189+frosetrain@users.noreply.github.com",
    NUM_POSTS_ON_HOMEPAGE: 5,
    NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "A place for me to talk about things.",
};

export const BLOG: Metadata = {
    TITLE: "Blog",
    DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION: "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
    {
        NAME: "GitHub",
        HREF: "https://github.com/frosetrain",
    },
];
