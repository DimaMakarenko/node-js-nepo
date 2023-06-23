import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers';
// import {redirect} from 'next/navigation';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const headerList = headers();

  const cookiesList = cookies();
  const coo = cookiesList.get('')?.value;
  
  // delete post
  // can change route for app
  // redirect('/blog');

  return NextResponse.json({ id })
}
