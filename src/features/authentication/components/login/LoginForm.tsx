import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/common/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/ui/form';
import { Input } from '@/common/components/ui/input';
import { useAppDispatch } from '@/common/hooks';
import {
  authenticateUserAsync,
  getAuthenticatedUserAsync,
} from '../../slices/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/common/components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      const authenticationResult = await dispatch(
        authenticateUserAsync(formData),
      ).unwrap();
      await dispatch(
        getAuthenticatedUserAsync(authenticationResult.data.token),
      );
      handleSuccess();
    } catch (error) {
      handleError(error);
    }
  };

  const handleSuccess = () => {
    toast({
      title: "Success",
      description: "Login success, Welcome to dicoding forum."
    });
    navigate('/');
  };

  const handleError = (error) => {
    toast({
      title: "Failed",
      description: error.message,
      variant: "destructive"
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-8" variant="default" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
