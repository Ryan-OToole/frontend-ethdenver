import styles from '@/styles/Home.module.css';
import CreateWallet from '@/components/CreateWallet';
import ConnectWallet from '@/components/ConnectWallet';

export default function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">ETHDenver Frontend</h1>
      <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Click below to create or connect a wallet</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <CreateWallet></CreateWallet>
        <ConnectWallet></ConnectWallet>
      </div>
      </div>
    </div>
  )
}
