import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { supabaseClient } from "@/utils/supabase";
import { useAuth } from "@clerk/nextjs";

export default function Create() {
  const { getToken, userId } = useAuth();

  const createRecipe = async () => {
    const supabaseToken = await getToken({ template: "supabase" });
  };
  return <div></div>;
}
