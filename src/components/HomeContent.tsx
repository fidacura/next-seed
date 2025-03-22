import { useState, useEffect } from "react";
import BookFeed from "@/components/BookFeed";
import BookFeedIntro from "@/components/BookFeedIntro";
import Typewriter from "@/components/Typewriter";
import styles from "@/pages/main.module.scss";

interface HomeContentProps {
  books: any[];
}

export default function HomeContent({ books }: HomeContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredBooks = books.filter((book) =>
    Object.values(book).some((value) =>
      String(value).toLowerCase().includes(searchQuery),
    ),
  );

  return (
    <>
      <Typewriter />
      <BookFeedIntro
        totalBooks={filteredBooks.length}
        onSearchChange={handleSearchChange}
        hideOnScroll={hideOnScroll}
      />
      <div className={styles.catalogue}>
        <div className={styles["bookfeed-wrapper"]}>
          <BookFeed books={filteredBooks} viewMode={viewMode} />
        </div>
      </div>
    </>
  );
}
