import DynamicZoneManager from "@/app/components/dynamic-zone/manager";
export default function PageContent({ pageData }: { pageData: any }) {
  const dynamicZone = pageData?.DynamicZone;
  return (
    <div className="relative w-full overflow-hidden">
      {dynamicZone && <DynamicZoneManager dynamicZone={dynamicZone} />}
    </div>
  );
}
