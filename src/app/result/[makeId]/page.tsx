export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  return [2, 3, 4].map((post) => ({
    slug: 'post.slug',
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log('slug>>>>>>', slug);
}
