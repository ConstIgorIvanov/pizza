import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="136" cy="135" r="125" />
    <rect x="1" y="274" rx="10" ry="10" width="280" height="16" />
    <rect x="3" y="309" rx="10" ry="10" width="280" height="88" />
    <rect x="9" y="417" rx="11" ry="11" width="95" height="30" />
    <rect x="251" y="474" rx="0" ry="0" width="1" height="0" />
    <rect x="131" y="414" rx="25" ry="25" width="154" height="45" />
  </ContentLoader>
);

export default Skeleton;
