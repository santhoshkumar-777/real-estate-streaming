import { properties } from '../../data/mockData';
import PropertyCard from '../../components/common/PropertyCard';

const MyProperties = () => {
  const myProps = properties.slice(0, 2);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Properties</h1>
        <p className="text-slate-500">Manage your active and pending listings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myProps.map((p, i) => (
          <PropertyCard key={p.id} property={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
