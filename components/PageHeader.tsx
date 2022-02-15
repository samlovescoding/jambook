interface PageHeaderProps {
  title: string;
  button?: string | null;
  onButtonClick?: () => void | null;
  search?: string | null | boolean;
  onChangeSearch?: any;
  searchProps?: any;
  children?: any;
}

const PageHeader = ({
  title,
  button,
  onButtonClick,
  search = false,
  onChangeSearch,
  searchProps = {},
  children,
}: PageHeaderProps) => {
  return (
    <div className="jb-header">
      <div className="jb-header-title">{title}</div>
      <div className="d-flex">
        {children}
        {search !== false && (
          <input
            type="search"
            className="jb-header-search"
            value={search as string}
            onChange={(e) => onChangeSearch(e.target.value)}
            {...searchProps}
          />
        )}
        {button && (
          <button className="jb-header-button" onClick={onButtonClick}>
            {button}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
