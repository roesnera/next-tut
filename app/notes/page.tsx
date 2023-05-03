import Link from "next/link";
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090");

async function getNotes() {
    const res = await pb.collection("notes").getFullList();
    console.log(res);

    return res;

    // return res?.items as any[];
}


export default async function NotesPage() {

    const notes = await getNotes();


    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>
        </div>
    )
}

function Note({ note }: any) {
    const { id, title, body, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{body}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}