import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090/");

async function getNote(noteId: string) {
    const res = await pb.collection("notes").getOne(noteId);


    return res;
}



export default async function NotePage({ params }: any) {

    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div>
                <h3>{note.title}</h3>
                <h5>{note.body}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    );
}