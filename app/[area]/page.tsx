import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LandingPage } from '@/components/Site';
import { landings, type Area } from '@/lib/content';
export function generateStaticParams(){return [{area:'trabalhista'},{area:'familia'}]}
export async function generateMetadata({params}:{params:Promise<{area:string}>}):Promise<Metadata>{
 const {area}=await params; const data=landings[area as Area];
 if(!data)return {};
 return {title:data.metaTitle,description:data.metaDescription,alternates:{canonical:`/${area}/`},openGraph:{title:data.metaTitle,description:data.metaDescription,url:`/${area}/`}};
}
export default async function AreaPage({params}:{params:Promise<{area:string}>}){
 const {area}=await params;
 const data=landings[area as Area];
 if(!data)notFound();
 return <LandingPage data={data}/>;
}
