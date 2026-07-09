import { getOrders, SelectOrder } from '@/lib/db';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const statusColor: Record<SelectOrder['status'], string> = {
  delivered: 'bg-green-100 text-green-700',
  shipped: 'bg-blue-100 text-blue-700',
  pending: 'bg-yellow-100 text-yellow-700',
  cancelled: 'bg-red-100 text-red-700'
};

export default async function OrdersPage(props: {
  searchParams: Promise<{ q: string; offset: string }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = Number(searchParams.offset ?? 0);
  const { orders, totalOrders } = await getOrders(search, offset);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>Manage your orders and their status.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[80px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Ordered At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    src={order.imageUrl}
                    alt={order.productName}
                    width={48}
                    height={48}
                    className="aspect-square rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{order.productName}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <Badge className={`capitalize ${statusColor[order.status]}`} variant="outline">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{`$${order.price}`}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.orderedAt.toLocaleDateString('en-US')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{orders.length}</strong> of <strong>{totalOrders}</strong> orders
        </div>
      </CardFooter>
    </Card>
  );
}
