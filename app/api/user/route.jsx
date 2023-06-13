/* 
GET ALL USERS
*/
import mongoDBConnect from '@/config/database';
import User from '@/models/User';

import { NextResponse } from 'next/server';

//  get all users
export const GET = async() => {
   try {
    await mongoDBConnect();
    const users =await User.find()
    return new NextResponse({users})
   } catch (error) {
    return new NextResponse({error:error.message});
   }
};

// create user
export const POST = async (request) => {
   try {
      await mongoDBConnect();
      const data = await request.json();
      const user = await User.create({
         ...data
      })
      return new NextResponse(user);
   } catch (error) {
      return new NextResponse({error:error.message});
   }
}

// delete user
export const DELETE = async (request) => {

   try {
      await mongoDBConnect();
      const {searchParams} = new URL(request.url);
      const id = searchParams.get('id');
      const user = await User.findByIdAndDelete(id);
      return NextResponse.json({user})

   } catch (error) {
    return new NextResponse({error:error.message});
      
   }
  

}

