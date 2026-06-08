import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/pageHeader";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="font-barlow">
            <PageHeader/>
            
            <div 
                id="dashboard-grid" 
                className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
            >

                {/* Orders */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-hijau rounded-full p-4 text-white text-xl">
                        <FaShoppingCart />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">75</span>
                        <span className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                {/* Delivered */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-blue-500 rounded-full p-4 text-white text-xl">
                        <FaTruck />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">175</span>
                        <span className="text-gray-400">Total Delivered</span>
                    </div>
                </div>

                {/* Canceled */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-red-500 rounded-full p-4 text-white text-xl">
                        <FaBan />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">40</span>
                        <span className="text-gray-400">Total Canceled</span>
                    </div>
                </div>

                {/* Revenue */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-yellow-500 rounded-full p-4 text-white text-xl">
                        <FaDollarSign />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Rp.128</span>
                        <span className="text-gray-400">Total Revenue</span>
                    </div>
                </div>

            </div>
        </div>
    );
}