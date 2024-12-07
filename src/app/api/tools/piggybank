import { PiggyBankRequestBody } from '@/tailwind.config';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse and validate the incoming request body
    const body: PiggyBankRequestBody = await request.json();

    const { amount, senderWallet, savingsWallet } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount provided. It must be greater than 0.' },
        { status: 400 }
      );
    }

    if (!senderWallet || !savingsWallet) {
      return NextResponse.json(
        { error: 'Both senderWallet and savingsWallet must be provided.' },
        { status: 400 }
      );
    }

    // Calculate savings and remaining amounts
    const savings = parseFloat((amount * 0.1).toFixed(2)); // 10% savings
    const remaining = parseFloat((amount * 0.9).toFixed(2)); // Remaining 90%

    // Mock transaction details (replace with actual blockchain transactions)
    const savingsTransaction = {
      from: senderWallet,
      to: savingsWallet,
      amount: savings,
      timestamp: new Date().toISOString(),
    };

    const mainTransaction = {
      from: senderWallet,
      to: 'main_receiver_wallet', // Replace with actual recipient
      amount: remaining,
      timestamp: new Date().toISOString(),
    };

    // Respond with the transaction details
    return NextResponse.json({
      message: 'Transaction split successfully.',
      transactions: {
        savingsTransaction,
        mainTransaction,
      },
    });
  } catch (error) {
    console.error('Error in PiggyBank processing:', error);
    return NextResponse.json(
      { error: 'Failed to process PiggyBank transaction.' },
      { status: 500 }
    );
  }
}
