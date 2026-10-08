import { siteInfo } from "../data";

export default function Footer() {
  return <footer className="site-footer"><span>© {new Date().getFullYear()} {siteInfo.fullName}</span><a href="#top">Voltar ao topo ↑</a><span>{siteInfo.location}</span></footer>;
}
