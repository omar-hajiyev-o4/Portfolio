import subscriptionItem from "../models/SubscriptionModel.js";

export const addNewUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ messageType: 'error', message: "Please enter email address"})
    }

    try {
        const user = await subscriptionItem.findOne({ email });
        if (user) return res.status(404).json({ messageType: 'warning', message: "You are already subscribed. \nYou will be notified about the new developments"});

        const newUser = new subscriptionItem({
            email: email
        });
        await newUser.save();

        res.status(200).json({ messageType: 'success', message: "You subscripted."});
    } catch (error) {
        res.status(500).json({ messageType: 'error', message: "Server error. Please try again later"});
    }
    
}