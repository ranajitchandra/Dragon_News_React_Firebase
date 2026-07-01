import { useContext, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { updateProfile } from "firebase/auth"
import { auth } from "../firebase/Firebase.config"
import defaultUser from "../assets/user.png"

export default function Profile() {
    const { user, setUser } = useContext(AuthContext)
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(user?.displayName || "")
    const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "")
    const [saving, setSaving] = useState(false)

    async function handleSave(e) {
        e.preventDefault()
        setSaving(true)
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoUrl,
            })
            setUser({ ...user, displayName: name, photoURL: photoUrl })
            setEditing(false)
        } catch (err) {
            console.error(err.message)
        } finally {
            setSaving(false)
        }
    }

    if (!user) return null

    return (
        <div className="p-4">
            <h2 className="text-xl text-gray-700 font-semibold p-2">My Profile</h2>
            <div className="bg-white rounded-xl shadow-md p-6 border border-base-300">
                <div className="flex flex-col items-center gap-4 mb-6">
                    <img
                        src={user.photoURL || defaultUser}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="text-center">
                        <p className="text-lg font-semibold">{user.displayName || "No name set"}</p>
                        <p className="text-accent text-sm">{user.email}</p>
                    </div>
                </div>

                {editing ? (
                    <form onSubmit={handleSave} className="space-y-4 max-w-md mx-auto">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Display Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Photo URL</label>
                            <input type="url" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                        </div>
                        <div className="flex gap-2">
                            <button type="submit" disabled={saving} className="bg-primary px-6 py-2 text-base-200 font-semibold rounded-lg">
                                {saving ? "Saving..." : "Save"}
                            </button>
                            <button type="button" onClick={() => setEditing(false)} className="border border-base-300 px-6 py-2 font-semibold rounded-lg">
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center">
                        <button onClick={() => { setName(user.displayName || ""); setPhotoUrl(user.photoURL || ""); setEditing(true) }} className="bg-primary px-8 py-2 text-base-200 font-semibold rounded-lg">
                            Edit Profile
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
