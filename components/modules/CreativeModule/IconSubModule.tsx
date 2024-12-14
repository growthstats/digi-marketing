import Img from '@/components/common/img';

export type IconSubModuleType = Sanity.Module<'icon'> &
  Partial<{
    icon: Sanity.Image;
    size: number;
  }>;

export default function IconSubModule({
  module,
  ...props
}: {
  module: IconSubModuleType;
} & React.ComponentProps<'figure'>) {
  return (
    <figure {...props}>
      <Img className="w-auto" image={module.icon} style={{ maxHeight: module.size }} imageWidth={module.size} />
    </figure>
  );
}
