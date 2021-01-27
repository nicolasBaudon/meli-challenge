import styles from "./styles.module.scss";

const Breadcrumb = ({ categories }: { categories: any }) => {
  return (
    <div className={styles.container}>
      {categories?.map((category, key) => (
        <span key={category}>
          <span className={styles.category_name}>{category}</span>
          {key < categories.length - 1 && (
            <img src="/chevron.svg" alt="" className={styles.chevron} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
