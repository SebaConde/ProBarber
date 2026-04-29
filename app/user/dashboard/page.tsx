import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Barcode, CreditCard, Users } from "lucide-react";
import { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "User dashboard",
};

const UserDashboard = async () => {
    const session = await auth()
  return (
    <div className="space-y-2">
      <h1 className="font-bold">Dashboard</h1>
      <h1 className="font-bold">Hola {session?.user.name} 👋</h1>
      <label>tu proximo corte esta cerca</label>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo turno</CardTitle>
            <BadgeDollarSign />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatCurrency(
                summary.totalSales._sum.totalPrice?.toString() || 0
              )} */}
              2
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas</CardTitle>
            <CreditCard />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatNumber(summary.ordersCount)} */}
              10
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatNumber(summary.usersCount)} */}3
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productos</CardTitle>
            <Barcode />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {formatNumber(summary.productsCount)} */}2
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <Charts data ={{
            salesData: summary.salesData,
           }}/> */}
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Reservas recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CLIENTE</TableHead>
                  <TableHead>FECHA</TableHead>
                  <TableHead>FECHA AGENDADA</TableHead>
                  <TableHead>SERVICIO</TableHead>
                  <TableHead>TOTAL</TableHead>
                  <TableHead>ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              {/* <TableBody>
                    {summary.latestSales.map((order)=>(
                        <TableRow key={order.id}>
                            <TableCell>
                                {order?.user?.name ? order.user.name : 'Usuario eliminado'}
                            </TableCell>
                            <TableCell>
                                {formatDateTime(order.createdAt).dateOnly}
                            </TableCell>
                            <TableCell>
                                {formatCurrency(order.totalPrice)}
                            </TableCell>
                            <TableCell>
                                <Link href={`/order/${order.id}`} >
                                    <span className="px-2">detalles</span>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody> */}
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
