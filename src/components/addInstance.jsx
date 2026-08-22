import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog";

const AddInstance = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="flex justify-center items-center cursor-pointer">
                    <Plus className="size-4 stroke-[3.5] w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:w-max-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    Form content goes here
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddInstance;